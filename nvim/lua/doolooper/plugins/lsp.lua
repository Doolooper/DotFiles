return {
  "neovim/nvim-lspconfig",
  event = { "BufReadPre", "BufNewFile" },
  dependencies = {
    "saghen/blink.cmp",
    "mason-org/mason.nvim",
    "mason-org/mason-lspconfig.nvim",
    "WhoIsSethDaniel/mason-tool-installer.nvim",
    {
      "folke/lazydev.nvim",
      ft = "lua",
      opts = {},
    },
  },
  config = function()
    local capabilities = require("blink.cmp").get_lsp_capabilities()
    local lspconfig = require("lspconfig")
    local configs = require("lspconfig.configs")

    local mason_lspconfig = require("mason-lspconfig")
    local mason = require("mason")
    local mason_tool_installer = require("mason-tool-installer")

    local keymap = vim.keymap

    vim.api.nvim_create_autocmd("LspAttach", {
      group = vim.api.nvim_create_augroup("UserLspConfig", {}),
      callback = function(ev)
        -- Buffer local mappings.
        -- See `:help vim.lsp.*` for documentation on any of the below functions
        local opts = { buffer = ev.buf, silent = true }

        -- set keybinds
        opts.desc = "Show LSP references"
        keymap.set("n", "gR", "<cmd>Telescope lsp_references<CR>", opts)

        opts.desc = "Go to declaration"
        keymap.set("n", "gd", vim.lsp.buf.declaration, opts)

        opts.desc = "Show LSP definitions"
        keymap.set("n", "gD", "<cmd>Telescope lsp_definitions<CR>", opts)

        opts.desc = "Show LSP implementations"
        keymap.set("n", "gi", "<cmd>Telescope lsp_implementations<CR>", opts)

        opts.desc = "Show LSP type definitions"
        keymap.set("n", "gt", "<cmd>Telescope lsp_type_definitions<CR>", opts)

        opts.desc = "See available code actions"
        keymap.set({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, opts)

        opts.desc = "Smart rename"
        keymap.set("n", "<leader>rn", vim.lsp.buf.rename, opts)

        opts.desc = "Show buffer diagnostics"
        keymap.set("n", "<leader>gD", "<cmd>Telescope diagnostics bufnr=0<CR>", opts)

        opts.desc = "Show line diagnostics"
        keymap.set("n", "<leader>gd", vim.diagnostic.open_float, opts)

        opts.desc = "Go to previous diagnostic"
        keymap.set("n", "[d", function()
          vim.diagnostic.jump({ count = -1, float = true })
        end, opts)

        opts.desc = "Go to next diagnostic"
        keymap.set("n", "]d", function()
          vim.diagnostic.jump({ count = 1, float = true })
        end, opts)

        opts.desc = "Show documentation for what is under cursor"
        keymap.set("n", "K", vim.lsp.buf.hover, opts)

        opts.desc = "Restart LSP"
        keymap.set("n", "<leader>rs", ":LspRestart<CR>", opts)

        -- enable inlay_hint
        if vim.lsp.inlay_hint then
          vim.lsp.inlay_hint.enable()
        end
      end,
    })

    -- Change the Diagnostic symbols in the sign column (gutter)
    local signs = { Error = " ", Warn = " ", Hint = "󰠠 ", Info = " " }
    for type, icon in pairs(signs) do
      local hl = "DiagnosticSign" .. type
      vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = "" })
    end

    mason.setup({
      ui = {
        icons = {
          package_installed = "✓",
          package_pending = "➜",
          package_uninstalled = "✗",
        },
      },
    })

    mason_lspconfig.setup({
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
        "rust_analyzer",
        "ts_ls",
      },
    })

    mason_tool_installer.setup({
      ensure_installed = {
        "prettier",
        "stylua",
        "eslint_d",
      },
    })
    -- omnisharp languageserver
    local pid = vim.fn.getpid()
    -- configure lsp servers
    lspconfig.rust_analyzer.setup({
      capabilties = capabilities,
      filetypes = { "rust" },
      root_dir = require("lspconfig").util.root_pattern("Cargo.toml", "src/*.rs"),
      settings = {
        ["rust_analyzer"] = {
          cargo = {
            allFeatures = true,
          },
        },
      },
    })
    if not configs.ts_ls then
      configs.ts_ls = {
        default_config = {
          cmd = { "typescript-language-server", "--stdio" },
          capabilties = capabilities,
          filetypes = {
            "javascript",
            "javascriptreact",
            "typescript",
            "typescriptreact",
            "html",
          },
          root_dir = require("lspconfig").util.root_pattern("package.json", "tsconfig.json", ".git"),
          single_file_support = true,
        },
      }
    end
    lspconfig.ts_ls.setup({
      capabilties = capabilities,
      cmd = { "typescript-language-server", "--stdio" },
      filetypes = {
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "html",
      },
      root_dir = require("lspconfig").util.root_pattern("package.json", "tsconfig.json", ".git"),
      single_file_support = true,
    })
    lspconfig.eslint.setup({
      capabilties = capabilities,
    })
    lspconfig.bashls.setup({
      capabilities = capabilities,
    })
    lspconfig.lua_ls.setup({
      capabilities = capabilities,
      -- cmd = { "lua_ls" },
      settings = {
        Lua = {
          diagnostics = {
            globals = { "vim" }, -- Recognize 'vim' as a global variable
          },
          completion = {
            callSnippet = "Replace",
          },
          workspace = {
            library = {
              vim.api.nvim_get_runtime_file("", true),
              "${3rd}/love2d/library",
            }, -- Include Neovim runtime files
          },
          telemetry = {
            enable = false,
          },
        },
      },
    })
    lspconfig.graphql.setup({
      capabilities = capabilities,
      filetypes = {
        "graphql",
        "gql",
        "svelte",
        "typescriptreact",
        "javascriptreact",
      },
    })
    lspconfig.jsonls.setup({
      capabilities = capabilities,
    })
    lspconfig.cssls.setup({
      capabilities = capabilities,
    })
    lspconfig.yamlls.setup({
      capabilities = capabilities,
    })
    lspconfig.html.setup({
      capabilities = capabilities,
      filetypes = {
        "templ",
        "html",
        "php",
        "css",
        "javascriptreact",
        "typescriptreact",
        "javascript",
        "typescript",
        "jsx",
        "tsx",
      },
    })
    lspconfig.omnisharp.setup({
      capabilties = capabilities,
      cmd = { "omnisharp", "--languageserver", "--hostPID", tostring(pid) },
    })
    -- mason_lspconfig.setup_handlers({
    --   -- configure lua server (with special settings)
    --   function(server_name)
    --     lspconfig[server_name].setup({
    --       capabilities = capabilities,
    --     })
    --   end,
    --   ["rust_analyzer"] = function()
    --     lspconfig["rust_analyzer"].setup({
    --       settings = {
    --         ["rust_analyzer"] = {
    --           inlayHints = {
    --             enable = true,
    --             chainingHints = true,
    --             typeHints = true,
    --             parameterHints = true,
    --             maxLength = 80,
    --           },
    --           workspace = {
    --             symbol = {
    --               search = {
    --                 kind = "all_symbols",
    --               },
    --             },
    --           },
    --         },
    --       },
    --     })
    --   end,
    -- })
  end,
}
