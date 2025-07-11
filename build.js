import { copyFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

async function postBuild() {
  try {
    // Copy manifest.json to dist
    await copyFile('manifest.json', 'dist/manifest.json')
    console.log('✅ Copied manifest.json to dist/')
    
    // Copy icons if they exist
    if (existsSync('icons')) {
      if (!existsSync('dist/icons')) {
        await mkdir('dist/icons', { recursive: true })
      }
      
      const iconFiles = ['icon16.png', 'icon48.png', 'icon128.png']
      for (const icon of iconFiles) {
        if (existsSync(`icons/${icon}`)) {
          await copyFile(`icons/${icon}`, `dist/icons/${icon}`)
          console.log(`✅ Copied ${icon}`)
        }
      }
    }
    
    console.log('📁 Load the dist/ folder in Chrome extensions')
    
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

postBuild() 