#!/bin/bash

# Maxzilla UI Publishing Script
# This script builds and publishes all packages to npm

set -e

echo "🚀 Starting Maxzilla UI package publishing..."

# Build core package
echo "📦 Building @maxzilla/ui-core..."
cd packages/core
npm run build
echo "✅ Core package built successfully"

# Build react package  
echo "📦 Building @maxzilla/ui-react..."
cd ../react
npm run build
echo "✅ React package built successfully"

# Return to root
cd ../..

echo "📋 Package publishing checklist:"
echo "1. Ensure you're logged into npm: npm whoami"
echo "2. Verify package versions are correct"
echo "3. Run 'npm publish' in each package directory:"
echo "   - cd packages/core && npm publish"
echo "   - cd packages/react && npm publish"

echo ""
echo "🔐 Security reminder: Never commit npm tokens to git!"
echo "✨ Publishing preparation complete!"