local status, _ = pcall(vim.cmd, "colorscheme sherbet")
if not status then
	return
end
