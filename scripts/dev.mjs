import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const cwd = process.cwd();
const nextDir = join(cwd, ".next");
const webpackCacheDir = join(cwd, "node_modules", ".cache", "webpack");

function safeRemove(path) {
  if (!existsSync(path)) return;
  rmSync(path, { recursive: true, force: true, maxRetries: 5, retryDelay: 120 });
}

try {
  safeRemove(nextDir);
  safeRemove(webpackCacheDir);
  // eslint-disable-next-line no-console
  console.log("[dev] cache reset complete (.next + webpack cache)");
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn("[dev] cache reset warning:", error);
}

const nextBin = join(cwd, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, "dev"], {
  cwd,
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_DISABLE_WEBPACK_CACHE: "1"
  }
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
