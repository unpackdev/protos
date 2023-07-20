package ast_pb

func (x *SourceUnit) GetName() string {
	for _, v := range x.Root.GetNodes() {
		if v.GetNodeType() == NodeType_CONTRACT_DEFINITION {
			return v.GetName()
		} else if v.GetNodeType() == NodeType_LIBRARY_DEFINITION {
			return v.GetName()
		} else if v.GetNodeType() == NodeType_INTERFACE_DEFINITION {
			return v.GetName()
		}

	}
	return ""
}
