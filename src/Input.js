import React from 'react'

export default function Input() {
  return (
    <div>
        <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</            span>
        <input type="text" class="form-control"             placeholder="Search Here" aria-label="Username"             aria-describedby="addon-wrapping"/>
    </div>
    </div>
  )
}
