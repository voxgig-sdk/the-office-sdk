package core

type TheOfficeError struct {
	IsTheOfficeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTheOfficeError(code string, msg string, ctx *Context) *TheOfficeError {
	return &TheOfficeError{
		IsTheOfficeError: true,
		Sdk:              "TheOffice",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TheOfficeError) Error() string {
	return e.Msg
}
