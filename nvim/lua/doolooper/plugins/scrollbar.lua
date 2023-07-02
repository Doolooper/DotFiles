local status, scrollbar = pcall(require, "scrollbar")
if not status then
	return
end

scrollbar.setup({
	handle = {
		color = "#4b6479",
	},
	marks = {
		Search = { color = "#e3d18a" },
		Error = { color = "#fc514e" },
		Warn = { color = "#f78c6c" },
		Info = { color = "#87bcff" },
		Hint = { color = "#c3ccdc" },
		Misc = { color = "#ae81ff" },
	},
})
