local status, cursorline = pcall(require, "nvim-cursorline")
if not status then
	return
end

local _, sherbet_colors = pcall(require, "sherbet.palette")

cursorline.setup({
	cursorline = {
		enable = false,
	},
	cursorword = {
		enable = true,
		min_length = 3,
		hl = { underline = false, fg = sherbet_colors.yellow, bg = sherbet_colors.ui_search },
	},
})
