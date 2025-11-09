return {
  {
    "lewis6991/gitsigns.nvim",
    event = { "BufReadPre", "BufNewFile" },
    opts = {},
  },
  {
    "f-person/git-blame.nvim",
    event = { "BufReadPre", "BufNewFile" },
    opts = {
      message_template = " <summary> • <date> • <author> • <<sha>>",
      date_format = "%r - %Y-%m-%d %H:%M",
    },
  },
}
