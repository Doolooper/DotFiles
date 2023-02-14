vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
        use 'wbthomason/packer.nvim'

        use {
            'nvim-telescope/telescope.nvim', tag = '0.1.1',
            -- or                            , branch = '0.1.x',
            requires = { { 'nvim-lua/plenary.nvim' } }
        }

        use({
            'rose-pine/neovim',
            as = 'rose-pine',
            config = function()
                require("rose-pine").setup()
                vim.cmd('colorscheme rose-pine')
            end
        })

        use('folke/tokyonight.nvim')

        use('nvim-treesitter/nvim-treesitter', { run = ':TSUpdate' })
        use('nvim-treesitter/playground')

        use('ThePrimeagen/harpoon')

        use('mbbill/undotree')

        use('tpope/vim-fugitive')

        use {
            'VonHeikemen/lsp-zero.nvim',
            branch = 'v1.x',
            requires = {
                -- LSP Support
                { 'neovim/nvim-lspconfig' }, -- Required
                { 'williamboman/mason.nvim' }, -- Optional
                { 'williamboman/mason-lspconfig.nvim' }, -- Optional

                -- Autocompletion
                { 'hrsh7th/nvim-cmp' }, -- Required
                { 'hrsh7th/cmp-nvim-lsp' }, -- Required
                { 'hrsh7th/cmp-buffer' }, -- Optional
                { 'hrsh7th/cmp-path' }, -- Optional
                { 'saadparwaiz1/cmp_luasnip' }, -- Optional
                { 'hrsh7th/cmp-nvim-lua' }, -- Optional

                -- Snippets
                { 'L3MON4D3/LuaSnip' }, -- Required
                { 'rafamadriz/friendly-snippets' }, -- Optional
            }
        }

        use("github/copilot.vim")
        use {
            'nvim-lualine/lualine.nvim',
            requires = {
                'nvim-tree/nvim-web-devicons', opt = true
            }
        }
        use {
            'nvim-tree/nvim-tree.lua',
            requires = {
                'nvim-tree/nvim-web-devicons',
            },
        }

        use {
            'akinsho/bufferline.nvim',
            tag = "v3.*",
            requires = 'nvim-tree/nvim-web-devicons'
        }

        use {
            'lucastavaresa/simpleIndentGuides.nvim',
            config = function()
                vim.opt.list = true -- enable in all buffers
                require("simpleIndentGuides").setup()
            end
        }
        use('airblade/vim-gitgutter')
        use('kdheepak/lazygit.nvim')
        use("petertriho/nvim-scrollbar")
        use {
            "lewis6991/gitsigns.nvim",
            config = function()
                require('gitsigns').setup()
                require("scrollbar.handlers.gitsigns").setup()
            end
        }
    end)
