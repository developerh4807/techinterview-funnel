#!/bin/bash
# secondbrain의 기술면접-vod docs 폴더를 이 repo의 ./docs로 심볼릭 링크합니다.
# 문서의 단일 진실원은 secondbrain이며, 이 링크는 커밋되지 않습니다(.gitignore).

SECONDBRAIN_DOCS="$HOME/secondbrain/20_Business/기술면접-vod/docs"

if [ ! -d "$SECONDBRAIN_DOCS" ]; then
  echo "❌ secondbrain 경로를 찾을 수 없습니다: $SECONDBRAIN_DOCS"
  echo "   secondbrain vault 위치를 확인하거나 스크립트를 수정하세요."
  exit 1
fi

if [ -L "./docs" ]; then
  echo "ℹ️  ./docs 심볼릭 링크가 이미 존재합니다."
  exit 0
fi

ln -sf "$SECONDBRAIN_DOCS" ./docs
echo "✓ docs 심볼릭 링크 생성: ./docs → $SECONDBRAIN_DOCS"
