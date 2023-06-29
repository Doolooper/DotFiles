local hlslens_status, hlslens = pcall(require, "hlslens")
if not hlslens_status then
	return
end

local scrollbar_handler_search_status, scrollbar_handler_search = pcall(require, "scrollbar.handlers.search")
if not scrollbar_handler_search_status then
	return
end

hlslens.setup({
	build_position_cb = function(plist, _, _, _)
		scrollbar_handler_search.handler.show(plist.start_pos)
	end,
})

scrollbar_handler_search.setup({})

local kopts = { noremap = true, silent = true }

vim.api.nvim_set_keymap(
	"n",
	"n",
	[[<Cmd>execute('normal! ' . v:count1 . 'n')<CR><Cmd>lua require('hlslens').start()<CR>]],
	kopts
)
vim.api.nvim_set_keymap(
	"n",
	"N",
	[[<Cmd>execute('normal! ' . v:count1 . 'N')<CR><Cmd>lua require('hlslens').start()<CR>]],
	kopts
)
vim.api.nvim_set_keymap("n", "*", [[*<Cmd>lua require('hlslens').start()<CR>]], kopts)
vim.api.nvim_set_keymap("n", "#", [[#<Cmd>lua require('hlslens').start()<CR>]], kopts)

vim.api.nvim_set_keymap("n", "<Leader>l", "<Cmd>noh<CR>", kopts)
