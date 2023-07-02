local status_ok, lens = pcall(require, "lsp-lens")
if not status_ok then
	return
end

lens.setup({
	sections = { -- Enable / Disable specific request
		definition = true,
		references = true,
		implementation = true,
	},
})
