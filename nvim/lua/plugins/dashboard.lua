return {
  "goolord/alpha-nvim",
  config = function()
    local alpha = require("alpha")
    local dashboard = require("alpha.themes.dashboard")

    local theta = require("alpha.themes.theta")
    theta.file_icons.provider = "devicons"

    theta.buttons.val = {
      dashboard.button("SPC f f", "󰈞  Find Files", "<cmd>Telescope find_files<cr>"),
      dashboard.button("SPC e e", "󰙅  File Explorer", "<cmd>NvimTreeToggle<CR>"),
      dashboard.button("u", "  Update plugins", "<cmd>Lazy sync<CR>"),
      dashboard.button("q", "󰅚  Quit", ":qa<CR>"),
    }

    alpha.setup(theta.config)
  end,
}
