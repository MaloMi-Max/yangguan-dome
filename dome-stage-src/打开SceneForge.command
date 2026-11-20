#!/bin/bash
cd "$(dirname "$0")" || exit 1
PORT=5175
if lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; then
  open "http://127.0.0.1:$PORT/"
  echo "SceneForge is already running: http://127.0.0.1:$PORT/"
  sleep 2
  exit 0
fi
echo "Starting SceneForge at http://127.0.0.1:$PORT/"
echo "Keep this Terminal window open. Press Ctrl+C to stop."
python3 -m http.server $PORT --bind 127.0.0.1 --directory dist &
SERVER_PID=$!
sleep 1
open "http://127.0.0.1:$PORT/"
wait $SERVER_PID
