require("bufferline").setup {
    options = {
        diagnostics = "nvim_lsp",
        show_close_icon = true,
        hover = {
            enable = true,
            reveal = {'close'}
        },
        offsets = {
            {
                filetype = "NvimTree",
                text = "File Explorer",
                separator = true,
                padding = 0
            }
        }
    }
}

vim.keymap.set("n", "[b", vim.cmd.BufferLineCycleNext)
vim.keymap.set("n", "]b", vim.cmd.BufferLineCyclePrev)
