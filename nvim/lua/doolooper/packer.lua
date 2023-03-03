vim.cmd [[packadd packer.nvim]]

return require("packer").startup(function(use)
    use("wbthomason/packer.nvim")

    use({
        "nvim-telescope/telescope.nvim",
        tag = "0.1.x",
        requires = { { "nvim-lua/plenary.nvim" } }
    })

    use("lewpoly/sherbet.nvim")

    use("nvim-treesitter/nvim-treesitter", { run = ":TSUpdate" })

    use("nvim-treesitter/playground")

    use("mbbill/undotree")

    use({
        "VonHeikemen/lsp-zero.nvim",
        branch = "v1.x",
        requires = {
            -- LSP Support
            { "neovim/nvim-lspconfig" },
            { "williamboman/mason.nvim" },
            { "williamboman/mason-lspconfig.nvim" },

            -- Autocompletion
            { "hrsh7th/nvim-cmp" },
            { "hrsh7th/cmp-nvim-lsp" },
            { "hrsh7th/cmp-buffer" },
            { "hrsh7th/cmp-path" },
            { "saadparwaiz1/cmp_luasnip" },
            { "hrsh7th/cmp-nvim-lua" },

            -- Snippets
            { "L3MON4D3/LuaSnip" },
            { "rafamadriz/friendly-snippets" },
        }
    })

    use("github/copilot.vim")

    use({
        "nvim-lualine/lualine.nvim",
        requires = {
            "nvim-tree/nvim-web-devicons", opt = true
        }
    })

    use({
        "nvim-tree/nvim-tree.lua",
        requires = {
            "nvim-tree/nvim-web-devicons",
        },
    })

    use({
        "akinsho/bufferline.nvim",
        tag = "v3.*",
        requires = "nvim-tree/nvim-web-devicons"
    })

    use({
        "lucastavaresa/simpleIndentGuides.nvim",
        config = function()
            vim.opt.list = true
            require("simpleIndentGuides").setup()
        end
    })

    use("airblade/vim-gitgutter")

    use("kdheepak/lazygit.nvim")

    use("petertriho/nvim-scrollbar")

    use("kevinhwang91/nvim-hlslens")

    use({
        "lewis6991/gitsigns.nvim",
        config = function()
            require("gitsigns").setup()
            require("scrollbar.handlers.gitsigns").setup()
        end
    })

    use("yamatsum/nvim-cursorline")

    use("numToStr/Comment.nvim")

    use("karb94/neoscroll.nvim")
end)
