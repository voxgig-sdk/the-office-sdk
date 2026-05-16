# TheOffice SDK utility: make_context

from core.context import TheOfficeContext


def make_context_util(ctxmap, basectx):
    return TheOfficeContext(ctxmap, basectx)
