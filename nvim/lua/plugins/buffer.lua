return {
  "romgrk/barbar.nvim",
  dependencies = {
    "lewis6991/gitsigns.nvim",
    "nvim-tree/nvim-web-devicons",
  },
  version = "^1.0.0",
  opts = {},
  init = function()
    vim.g.barbar_auto_setup = false
  end,
  config = function()
    require("barbar").setup({
      focus_on_close = "previous",
      icons = {
        diagnostics = {
          [vim.diagnostic.severity.ERROR] = { enabled = true, icon = " " },
          [vim.diagnostic.severity.WARN] = { enabled = false, icon = " " },
          [vim.diagnostic.severity.INFO] = { enabled = false, icon = " " },
          [vim.diagnostic.severity.HINT] = { enabled = false, icon = "󰠠 " },
        },
        gitsigns = {
          added = { enabled = true, icon = "+" },
          changed = { enabled = true, icon = "~" },
          deleted = { enabled = true, icon = "-" },
        },
        modified = { button = "●" },
        pinned = { button = "", filename = true },
      },
    })

    local opts = { noremap = true, silent = true }
    vim.keymap.set("n", "<A-,>", "<Cmd>BufferPrevious<CR>", opts)
    vim.keymap.set("n", "<A-.>", "<Cmd>BufferNext<CR>", opts)
    vim.keymap.set("n", "<A-<>", "<Cmd>BufferMovePrevious<CR>", opts)
    vim.keymap.set("n", "<A->>", "<Cmd>BufferMoveNext<CR>", opts)
    vim.keymap.set("n", "<A-p>", "<Cmd>BufferPin<CR>", opts)
    -- vim.keymap.set("n", "<leader>q", "<Cmd>BufferClose<CR>", opts)
  end,
}
