return {
  {
    "lewis6991/gitsigns.nvim",
    event = { "BufReadPre", "BufNewFile" },
    opts = {
      current_line_blame = true,
      current_line_blame_opts = {
        virt_text = true,
        virt_text_pos = "eol",
        delay = 800,
        ignore_whitespace = false,
        virt_text_priority = 100,
        use_focus = true,
      },
      current_line_blame_formatter = "<summary> • <author_time:%R - %Y-%m-%d %H:%M> • <author> • <<abbrev_sha>>",
    },
  },
  {
    "esmuellert/vscode-diff.nvim",
    dependencies = { "MunifTanjim/nui.nvim" },
    cmd = "CodeDiff",
  },
}
