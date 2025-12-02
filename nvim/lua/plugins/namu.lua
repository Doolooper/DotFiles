return {
  "bassamsdata/namu.nvim",
  opts = {
    global = {},
    namu_symbols = {
      options = {},
    },
  },
  vim.keymap.set("n", "<leader>ds", ":Namu symbols<cr>", {
    desc = "Jump to LSP symbol",
    silent = true,
  }),
  vim.keymap.set("n", "<leader>dw", ":Namu workspace<cr>", {
    desc = "LSP Symbols - Workspace",
    silent = true,
  }),
}
