class SignInUser extends HTMLElemen {
	constructor () {
		super()
		this.shadow = this.attachShadow({mode : "closed"})
	}
	connectedCallback() {}
	static get abservedAttributes() {
		return []
	}
	attributechangeCallback(attrName, oldVal, newVal)
}
customElements.define("",)