-- Pull in the wezterm API
local wezterm = require("wezterm")

-- This will hold the configuration.
local config = wezterm.config_builder()

config.color_scheme = "Kanagawa (Gogh)"
config.window_decorations = "RESIZE"
config.hide_tab_bar_if_only_one_tab = true
config.native_macos_fullscreen_mode = true
config.window_close_confirmation = "NeverPrompt"
config.font = wezterm.font("JetBrainsMono Nerd Font Mono")
config.window_padding = {
	left = 10,
	right = 10,
	top = 10,
	bottom = 10,
}

-- and finally, return the configuration to wezterm
return config
