return {
  {
    "rebelot/kanagawa.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "webhooked/kanso.nvim",
    lazy = false,
    priority = 1000,
    opts = {
      italics = false,
      background = {
        dark = "ink",
        light = "ink",
      },
    },
    config = function()
      vim.cmd("colorscheme kanso-ink")
    end,
  },
}
