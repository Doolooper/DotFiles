backup () {
    folders=(
        "aerospace"
        "bat"
        "borders"
        "brewfile"
        "btop"
        "fastfetch"
        "gh"
        "ghostty"
        "git"
        "nvim"
        "ohmyposh"
        "powershell"
        "sketchybar"
        "sketchybar_bottom"
        "spicetify"
        "tmux"
        "vscode"
        "zed"
        "zsh"
    )

    pwd=$(pwd)

    for folder in "${folders[@]}"; do
        rm -rf "$HOME/Codes/Doolooper/DotFiles/$folder"
        cp -rf "$HOME/.config/$folder" "$HOME/Codes/Doolooper/DotFiles/$folder"
    done
    
    cd ~/Codes/Doolooper/DotFiles
    git add .
    git commit -m "backup updated on $(date +'%Y-%m-%d %H:%M')"
    git push
    git clean -fxd
    cd $pwd
}

update () {
    BLUE='\033[0;34m'
    NC='\033[0m'
    echo "${BLUE}update brew pacakges${NC}"
    brew update -q
    brew upgrade -q
    brew cleanup -q
    echo "${BLUE}update tmux plugins${NC}"
    ~/.tmux/plugins/tpm/bin/update_plugins all &> /dev/null
    echo "${BLUE}update neovim plugins${NC}"
    nvim --headless "+Lazy! sync" +qa &> /dev/null
    echo "${BLUE}update rust${NC}"
    rustup update 
    echo "${BLUE}update deno${NC}"
    deno upgrade
    echo "${BLUE}update vscode extensions${NC}"
    code --update-extensions
}

cpy() {
  cat "$1" | pbcopy
}
