backup () {
    folders=(
        "aerospace"
        "bat"
        "borders"
        "brewfile"
        "btop"
        "fastfetch"
        "gh"
        "git"
        "nvim"
        "ohmyposh"
        "powershell"
        "sketchybar"
        "sketchybar_bottom"
        "tmux"
        "wezterm"
        "zed"
        "zsh"
    )
    for folder in "${folders[@]}"; do
        rm -rf "$HOME/Codes/Doolooper/DotFiles/$folder"
        cp -rf "$HOME/.config/$folder" "$HOME/Codes/Doolooper/DotFiles/$folder"
    done
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
    echo "${BLUE}update brew file${NC}"
    brew file update
}

cpy() {
  cat "$1" | pbcopy
}
