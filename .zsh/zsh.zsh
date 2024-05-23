eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/uew.omp.json)"
eval "$(atuin init zsh --disable-up-arrow)"
eval "$(fnm env --use-on-cd)"

source $HOME/.zsh/alias.zsh
source $HOME/.zsh/completion.zsh
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

SAVEHIST=1000
HISTSIZE=999
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

export BAT_THEME="Nord"

eval "$(zoxide init zsh)"
