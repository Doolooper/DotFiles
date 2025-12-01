return {
  {
    "nvim-lualine/lualine.nvim",
    dependencies = { "nvim-tree/nvim-web-devicons" },
    config = function()
      local lualine = require("lualine")
      local lazy_status = require("lazy.status")

      lualine.setup({
        options = {
          component_separators = "",
          section_separators = { left = "", right = "" },
        },
        extensions = { "nvim-tree", "trouble" },
        globalstatus = true,
        sections = {
          lualine_a = {
            {
              "mode",
              separator = { left = "", right = "" },
              padding = 2,
              fmt = function(str)
                return str:sub(1, 1)
              end,
            },
          },
          lualine_b = { "branch", "diff" },
          lualine_c = {},
          lualine_x = {
            {
              lazy_status.updates,
              cond = lazy_status.has_updates,
              color = { fg = "#ff9e64" },
            },
          },
          lualine_z = {
            { "location", separator = { left = "" }, padding = 2 },
            {
              "filetype",
              colored = true,
              icon_only = false,
            },
            { "fileformat" },
            { "encoding", separator = { right = "" }, padding = 2 },
          },
        },
      })
    end,
  },
}
