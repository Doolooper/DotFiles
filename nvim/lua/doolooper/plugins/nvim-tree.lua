return {
  "nvim-tree/nvim-tree.lua",
  dependencies = {
    "nvim-tree/nvim-web-devicons",
    "echasnovski/mini.icons",
  },
  config = function()
    local nvimtree = require("nvim-tree")

    -- recommended settings from nvim-tree documentation
    vim.g.loaded_netrw = 1
    vim.g.loaded_netrwPlugin = 1

    nvimtree.setup({
      view = {
        side = "left",
        width = 35,
        relativenumber = true,
      },
      -- change folder arrow icons
      renderer = {
        indent_markers = {
          enable = true,
        },
      },
      -- disable window_picker for
      -- explorer to work well with
      -- window splits
      actions = {
        open_file = {
          window_picker = {
            enable = false,
          },
        },
      },
      filters = {
        custom = { ".DS_Store" },
      },
      git = {
        ignore = true,
      },
      update_focused_file = {
        enable = true,
      },
    })

    -- set keymaps
    local keymap = vim.keymap -- for conciseness

    keymap.set("n", "<leader>ee", "<cmd>NvimTreeToggle<CR>", { desc = "Toggle file explorer" }) -- toggle file explorer
    keymap.set("n", "<leader>ef", "<cmd>NvimTreeFindFileToggle<CR>", { desc = "Toggle file explorer on current file" }) -- toggle file explorer on current file
    keymap.set("n", "<leader>ec", "<cmd>NvimTreeCollapse<CR>", { desc = "Collapse file explorer" }) -- collapse file explorer
    keymap.set("n", "<leader>er", "<cmd>NvimTreeRefresh<CR>", { desc = "Refresh file explorer" }) -- refresh file explorer

    local function open_nvim_tree(data)
      -- buffer is a [No Name]
      local no_name = data.file == "" and vim.bo[data.buf].buftype == ""

      -- buffer is a directory
      local directory = vim.fn.isdirectory(data.file) == 1

      if not no_name and not directory then
        return
      end

      -- change to the directory
      if directory then
        vim.cmd.cd(data.file)
      end

      -- open the tree
      require("nvim-tree.api").tree.open()
    end
    vim.api.nvim_create_autocmd({ "VimEnter" }, { callback = open_nvim_tree })
  end,
}
