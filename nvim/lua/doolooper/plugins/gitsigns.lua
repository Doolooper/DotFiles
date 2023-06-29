-- import gitsigns plugin safely
local gitsigns_status, gitsigns = pcall(require, "gitsigns")
if not gitsigns_status then
	return
end


-- import gitsigns scrollbar handler plugin safely
local gitsigns_handler_status, gitsigns_scrollbar_handler = pcall(require, "scrollbar.handlers.gitsigns")
if not gitsigns_handler_status then
	return
end

gitsigns.setup()
gitsigns_scrollbar_handler.setup()
