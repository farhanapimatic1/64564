/*
 * CalculatorServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package org.example.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class ICalculatorSubtractOutputMessage 
        extends java.util.Observable
        implements java.io.Serializable {
    private static final long serialVersionUID = 5050240813727640464L;
    private SubtractResponse parameters;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("parameters")
    public SubtractResponse getParameters ( ) { 
        return this.parameters;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("parameters")
    public void setParameters (SubtractResponse value) { 
        this.parameters = value;
        notifyObservers(this.parameters);
    }
 
}
 