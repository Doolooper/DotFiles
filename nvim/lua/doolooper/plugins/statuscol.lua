local status_statuscol, statuscol = pcall(require, "statuscol")
local status_builtins, builtin = pcall(require, "statuscol.builtin")

if not status_statuscol or not status_builtins then
	return
end

statuscol.setup({
	segments = {
		{
			text = { " ", builtin.foldfunc, " " },
			condition = { builtin.not_empty, true, builtin.not_empty },
			click = "v:lua.ScFa",
		},
		{
			sign = { name = { "Diagnostic" }, maxwidth = 2, auto = true },
			click = "v:lua.ScSa",
		},
		{
			text = { builtin.lnumfunc, " " },
			condition = { true, builtin.not_empty },
			click = "v:lua.ScLa",
		},
		{
			sign = {
				name = { "GitSigns" },
				maxwidth = 1,
				auto = true,
			},
			click = "v:lua.ScSa",
			condition = { builtin.not_empty, true, builtin.not_empty },
		},
	},
})
