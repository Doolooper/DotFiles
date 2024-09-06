return {
  "akinsho/bufferline.nvim",
  dependencies = { "nvim-tree/nvim-web-devicons" },
  version = "*",
  opts = {},
  config = function()
    require("bufferline").setup({
      options = {
        diagnostics = "nvim_lsp",
        show_close_icon = true,
        separator_style = "slant",
        hover = {
          enable = true,
          reveal = { "close" },
        },
        offsets = {
          {
            filetype = "NvimTree",
            text = "File Explorer",
            separator = true,
            padding = 0,
          },
        },
      },
    })
    vim.keymap.set("n", "<M-Tab>", vim.cmd.BufferLineCycleNext)
    vim.keymap.set("n", "<S-M-Tab>", vim.cmd.BufferLineCyclePrev)
  end,
}
