local status, simpleIndent = pcall(require, "simpleIndentGuides")

if not status then
	return
end
vim.opt.list = true
simpleIndent.setup()
