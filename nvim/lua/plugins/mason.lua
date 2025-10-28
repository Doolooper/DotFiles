return {
  {
    "mason-org/mason.nvim",
    opts = {
      max_concurrent_installers = 20,
      ui = {
        height = 0.8,
        icons = {
          package_installed = "✓",
          package_pending = "➜",
          package_uninstalled = "✗",
        },
      },
    },
  },
  {
    "williamboman/mason-lspconfig.nvim",
    dependencies = "neovim/nvim-lspconfig",
    opts = {
      automatic_enable = true,
      automatic_installatn = true,
      -- list of servers for mason to install
      ensure_installed = {
        "html",
        "bashls",
        "cssls",
        "yamlls",
        "jsonls",
        "eslint",
        "lua_ls",
        "graphql",
        "ts_ls",
      },
      handlers = {
        function(name)
          vim.lsp.enable(name)
        end,
      },
    },
  },
  {
    "WhoIsSethDaniel/mason-tool-installer.nvim",
    opts = {
      ensure_installed = {
        "prettier",
        "stylua",
        "eslint_d",
      },
    },
  },
  {
    "folke/lazydev.nvim",
    dependencies = "neovim/nvim-lspconfig",
    ft = "lua",
    opts = true,
  },
  {
    "j-hui/fidget.nvim",
    event = "LspAttach",
    opts = {
      progress = {
        suppress_on_insert = true,
        display = {
          done_ttl = 2,
          done_icon = "✔",
          progress_icon = {
            pattern = {
              " 󰫃 ",
              " 󰫄 ",
              " 󰫅 ",
              " 󰫆 ",
              " 󰫇 ",
              " 󰫈 ",
            },
          },
          done_style = "Comment",
          group_style = "Comment",
          icon_style = "Comment",
          progress_style = "Comment",
        },
      },
      notification = {
        window = {
          border_hl = "Comment",
          normal_hl = "Comment",
          winblend = 100,
          border = "solid",
          relative = "win",
        },
      },
    },
  },
  {
    "Wansmer/symbol-usage.nvim",
    event = "LspAttach",
    opts = {
      text_format = function(symbol)
        local res = {}

        if symbol.references then
          local usage = symbol.references == 1 and "reference" or "references"
          table.insert(res, { ("󰌹  %s %s"):format(symbol.references, usage), "LspCodeLens" })
        end

        return res
      end,
    },
  },
}
