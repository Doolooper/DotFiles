vim.g.mapleader = " "

local keymap = vim.keymap

keymap.set("n", "Q", "<nop>")

keymap.set("n", "<leader>w", ":w<CR>", { desc = "Save current buffer" })
keymap.set("n", "<leader>q", ":bp<bar>sp<bar>bn<bar>bd<CR>", { desc = "Close current buffer" })

keymap.set("i", "<C-c>", "<Esc>", { desc = "Exit insert mode" })

keymap.set("n", "<Esc>", function()
  vim.cmd("nohlsearch")
  vim.cmd("NoiceDismiss")
end, { desc = "Clear search highlights" })

keymap.set("n", "x", '"_x', { desc = "Delete single character without copying into register" })
keymap.set({ "n", "v" }, "<leader>d", [["_d]], { desc = "Delete without yank" })

-- increment/decrement numbers
keymap.set("n", "<leader>+", "<C-a>", { desc = "Increment number" })
keymap.set("n", "<leader>-", "<C-x>", { desc = "Decrement number" })

-- window management
keymap.set("n", "<leader>sv", "<C-w>v", { desc = "Split window vertically" })
keymap.set("n", "<leader>sh", "<C-w>s", { desc = "Split window horizontally" })
keymap.set("n", "<leader>se", "<C-w>=", { desc = "Make splits equal size" })
keymap.set("n", "<leader>sx", "<cmd>close<CR>", { desc = "Close current split" })

keymap.set(
  "n",
  "<leader>h",
  [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]],
  { desc = "Replace word under cursor" }
)vim.g.mapleader = " "

local keymap = vim.keymap

keymap.set("n", "Q", "<nop>")

keymap.set("n", "<leader>w", ":w<CR>", { desc = "Save current buffer" })
keymap.set("n", "<leader>q", ":bp<bar>sp<bar>bn<bar>bd<CR>", { desc = "Close current buffer" })

keymap.set("i", "<C-c>", "<Esc>", { desc = "Exit insert mode" })

keymap.set("n", "<Esc>", function()
  vim.cmd("nohlsearch")
  vim.cmd("NoiceDismiss")
end, { desc = "Clear search highlights" })

keymap.set("n", "x", '"_x', { desc = "Delete single character without copying into register" })
keymap.set({ "n", "v" }, "<leader>d", [["_d]], { desc = "Delete without yank" })

-- increment/decrement numbers
keymap.set("n", "<leader>+", "<C-a>", { desc = "Increment number" })
keymap.set("n", "<leader>-", "<C-x>", { desc = "Decrement number" })

-- window management
keymap.set("n", "<leader>sv", "<C-w>v", { desc = "Split window vertically" })
keymap.set("n", "<leader>sh", "<C-w>s", { desc = "Split window horizontally" })
keymap.set("n", "<leader>se", "<C-w>=", { desc = "Make splits equal size" })
keymap.set("n", "<leader>sx", "<cmd>close<CR>", { desc = "Close current split" })

keymap.set(
  "n",
  "<leader>h",
  [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]],
  { desc = "Replace word under cursor" }
)
