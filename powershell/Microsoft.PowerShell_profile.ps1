Import-Module -Name PSReadLine
Import-Module -Name Terminal-Icons

$ohMyPoshPath = brew --prefix oh-my-posh
oh-my-posh init pwsh --config $ohMyPoshPath/themes/tokyo.omp.json | Invoke-Expression
Invoke-Expression (& { (zoxide init powershell | Out-String) })

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView

Set-Alias -Name gg -Value lazygit
Set-Alias -Name cd -Value z -Option AllScope


## alias function
function ls {
    eza -l --icons $args
}

function tree {
    eza -lT --icons $args
}

