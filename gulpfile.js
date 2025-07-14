- task: Npm@1
  displayName: 'Run npm install'
  inputs:
    command: 'install'
    verbose: false

- powershell: |
    $scssPath = "Tailspin.SpaceGame.Web/wwwroot/scss"
    if (Test-Path $scssPath) {
      Write-Host "✅ SCSS directory found. Compiling..."
      npx sass Tailspin.SpaceGame.Web/wwwroot/scss:Tailspin.SpaceGame.Web/wwwroot/css
    } else {
      Write-Host "⚠️ SCSS directory not found. Skipping Sass compilation."
    }
  displayName: 'Compile Sass assets'



- script: 'npx gulp'
  displayName: 'Run gulp tasks'
  workingDirectory: Tailspin.SpaceGame.Web

