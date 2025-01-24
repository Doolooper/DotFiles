if [ "$TERM_PROGRAM" != "Apple_Terminal" ]; then
    eval "$(oh-my-posh init zsh --config $HOME/.config/ohmyposh/config.json)"
fi

eval "$(atuin init zsh --disable-up-arrow --disable-ctrl-r)"
eval "$(fnm env --use-on-cd --shell zsh)"

source $HOME/.config/zsh/alias.zsh
source $HOME/.config/zsh/completion.zsh
source $HOME/.config/zsh/fzf.zsh
source $HOME/.config/zsh/functions.zsh
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
# Add deno completions to search path
if [[ ":$FPATH:" != *":/Users/doolooper/.config/zsh/completions:"* ]]; then 
    export FPATH="/Users/doolooper/.config/zsh/completions:$FPATH"
fi

export PATH="$HOME/.bin:$PATH"

source "/Users/doolooper/.deno/env"

bindkey '^p' atuin-search

SAVEHIST=1000
HISTSIZE=999
HISTDUP=erase
setopt share_history 
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_ignore_all_dups
setopt hist_verify
setopt hist_ignore_space
setopt hist_find_no_dups
setopt hist_save_no_dups

# completion using arrow keys (based on history)
bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward
bindkey '\e' kill-whole-line

# Initialize the completion system
autoload -Uz compinit

# Cache completion if nothing changed - faster startup time
typeset -i updated_at=$(date +'%j' -r ~/.zcompdump 2>/dev/null || stat -f '%Sm' -t '%j' ~/.zcompdump 2>/dev/null)
if [ $(date +'%j') != $updated_at ]; then
  compinit -i
else
  compinit -C -i
fi

# Enhanced form of menu completion called `menu selection'
zmodload -i zsh/complist

eval "$(zoxide init zsh)"

function start_tmux_if_iterm() {
    if [[ "$TERM_PROGRAM" == "iTerm.app" || "$TERM_PROGRAM" == "WezTerm" || "$TERM_PROGRAM" == "ghostty" ]]; then
        if command -v tmux &> /dev/null; then
            if tmux ls &> /dev/null; then
                tmux attach-session -t $(tmux ls | awk -F: '{print $1}' | head -n 1)
            else
                tmux new-session
            fi
        else
            echo "tmux is not installed"
        fi
    fi
}


start_tmux_if_iterm

