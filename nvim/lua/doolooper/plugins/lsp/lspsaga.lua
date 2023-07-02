-- import lspsaga safely
local saga_status, saga = pcall(require, "lspsaga")
if not saga_status then
	return
end

saga.setup({
	-- keybinds for navigation in lspsaga window
	scroll_preview = { scroll_down = "<C-f>", scroll_up = "<C-b>" },
	-- use enter to open file with definition preview
	show_file = false,
	definition = {
		edit = "<CR>",
	},
	symbol_in_winbar = {
		enable = false,
	},
	ui = {
		title = false,
		colors = {
			normal_bg = "#022746",
		},
	},
})
