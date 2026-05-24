#!/usr/bin/env bash
# Continuously runs the detail-seed until it completes (or you kill it).
# Survives transient crashes/network drops by re-launching on non-zero exit.
#
#   ./scripts/run-seed.sh                      # foreground
#   ./scripts/run-seed.sh background           # detached, logs to seed.log
#   tail -f seed.log
#   kill $(cat seed.pid)                       # stop background run
set -u

MODE="${1:-foreground}"

run_loop() {
  while ! npm run seed -- --details-only --random; do
    echo "[$(date '+%H:%M:%S')] seed exited, restarting in 15s…"
    sleep 15
  done
}

case "$MODE" in
  background)
    nohup bash -c "$(declare -f run_loop); run_loop" > seed.log 2>&1 &
    echo $! > seed.pid
    echo "started in background (pid $(cat seed.pid)) — tail -f seed.log"
    ;;
  *)
    run_loop
    ;;
esac
