package ast_pb

func (x *SourceUnit) GetSourceUnitDefinitionId() int64 {
	for _, v := range x.Root.GetNodes() {
		if v.GetNodeType() == NodeType_CONTRACT_DEFINITION {
			return v.GetId()
		} else if v.GetNodeType() == NodeType_LIBRARY_DEFINITION {
			return v.GetId()
		} else if v.GetNodeType() == NodeType_INTERFACE_DEFINITION {
			return v.GetId()
		}

	}
	return 0
}

func (x *SourceUnit) ExportedSymbolExists(symbol int64) bool {
	for _, v := range x.ExportedSymbols {
		if v.GetId() == symbol {
			return true
		}
	}
	return false
}
