local status, code_window = pcall(require, "codewindow")
if not status then
	return
end

code_window.setup()

code_window.apply_default_keybinds()

vim.keymap.set("n", "<leader>mm", code_window.toggle_minimap, { desc = "Toggle minimap" })
