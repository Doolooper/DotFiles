local status, scrollbar = pcall(require, "scrollbar")
if not status then
	return
end

local _, sherbet_colors = pcall(require, "sherbet.palette")
scrollbar.setup({
	handle = {
		color = sherbet_colors.alt_fg,
	},
	marks = {
		Search = { color = sherbet_colors.yellow },
		Error = { color = sherbet_colors.error },
		Warn = { color = sherbet_colors.warn },
		Info = { color = sherbet_colors.info },
		Hint = { color = sherbet_colors.hint },
		Misc = { color = sherbet_colors.blue },
	},
})
