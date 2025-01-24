return {
  "luukvbaal/statuscol.nvim",
  config = function()
    local builtin = require("statuscol.builtin")
    require("statuscol").setup({
      segments = {
        {
          text = { " ", builtin.foldfunc, " " },
          condition = { true, builtin.not_empty },
          click = "v:lua.ScFa",
        },
        {
          sign = {
            namespace = { "diagnostic" },
            maxwidth = 2,
            auto = true,
          },
          click = "v:lua.ScSa",
        },
        {
          text = { builtin.lnumfunc, " " },
          condition = { true, builtin.not_empty },
          click = "v:lua.ScLa",
        },
        {
          sign = {
            namespace = { "gitsigns" },
            maxwidth = 2,
            auto = true,
          },
          click = "v:lua.ScSa",
          condition = { builtin.not_empty },
        },
      },
    })
  end,
}
