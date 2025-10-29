return {
  "f-person/git-blame.nvim",
  event = { "BufReadPre", "BufNewFile" },
  opts = {
    message_template = " <summary> • <date> • <author> • <<sha>>",
    date_format = "%r - %Y-%m-%d %H:%M",
  },
}
