return {
  {
    "rebelot/kanagawa.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "mcauley-penney/techbase.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "fcancelinha/nordern.nvim",
    lazy = false,
    priority = 1000,
    branch = "master",
  },
  {
    "killitar/obscure.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "gmr458/cold.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "aktersnurra/no-clown-fiesta.nvim",
    lazy = false,
    priority = 1000,
  },
  {
    "lucasadelino/conifer.nvim",
    priority = 1000,
    lazy = false,
    opts = {},
  },
  {
    "chama-chomo/grail",
    version = false,
    lazy = false,
    priority = 1000,
  },
  {
    "wheat-thin-wiens/rei.nvim",
    priority = 1000,
    opts = {},
    config = function()
      vim.cmd("colorscheme rei")
    end,
  },
}
