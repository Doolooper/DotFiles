return {
  "folke/trouble.nvim",
  dependencies = {
    "nvim-tree/nvim-web-devicons",
    "folke/todo-comments.nvim",
  },
  keys = {
    { "<leader>xx", "<cmd>Trouble diagnostics toggle focus=true<CR>", desc = "Open/close trouble list" },
    {
      "<leader>xd",
      "<cmd>Trouble diagnostics toggle filter.buf=0 focus=true<CR>",
      desc = "Open trouble document diagnostics",
    },
    { "<leader>xc", "<cmd>Trouble symbols toggle focus=false<CR>", desc = "Open trouble symbols" },
    { "<leader>xq", "<cmd>Trouble qflist toggle<CR>", desc = "Open trouble quickfix list" },
    { "<leader>xl", "<cmd>Trouble loclist toggle<CR>", desc = "Open trouble location list" },
    { "<leader>xt", "<cmd>TodoTrouble toggle<CR>", desc = "Open todos in trouble" },
  },
  opts = {},
}
