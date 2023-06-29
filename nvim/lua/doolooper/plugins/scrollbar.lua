local status, scrollbar = pcall(require, "scrollbar")
if not status then
	return
end

scrollbar.setup({
	-- the color of the "thumb" of the scrollbar
	thumb_fill = "#4b5263",

	-- the color of the "rail" of the scrollbar
	rail_fill = "#2c323c",

	-- whether the rail should be "rounded" or "squared" (default is "rounded")
	rail_style = "rounded",

	-- the thickness of the rail (default is 10)
	rail_thickness = 10,

	-- the thickness of the "thumb" of the scrollbar (default is 10)
	thumb_thickness = 10,

	-- whether the thumb should "expand" as you scroll, or be a fixed size (default is true)
	expand_on_drag = true,
})
