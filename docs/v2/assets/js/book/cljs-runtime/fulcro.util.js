goog.provide('fulcro.util');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('fulcro.logging');
fulcro.util.force_children = (function fulcro$util$force_children(x){
var G__51038 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.util.force_children),G__51038);
} else {
return G__51038;
}
});
fulcro.util.union_QMARK_ = (function fulcro$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__51039 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__51039);
} else {
return G__51039;
}
})();
return ((cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1)))));
});
fulcro.util.join_QMARK_ = (function fulcro$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
/**
 * Returns true if x is an ident.
 */
fulcro.util.ident_QMARK_ = (function fulcro$util$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword)));
});
fulcro.util.join_entry = (function fulcro$util$join_entry(expr){
var vec__51040 = ((cljs.core.seq_QMARK_(expr))?cljs.core.ffirst(expr):cljs.core.first(expr));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.list_QMARK_(k))?cljs.core.first(k):k),v], null);
});
fulcro.util.join_key = (function fulcro$util$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
var k = cljs.core.ffirst(expr);
if(cljs.core.list_QMARK_(k)){
return cljs.core.first(k);
} else {
return cljs.core.ffirst(expr);
}
} else {
if(cljs.core.seq_QMARK_(expr)){
var G__51044 = cljs.core.first(expr);
return (fulcro.util.join_key.cljs$core$IFn$_invoke$arity$1 ? fulcro.util.join_key.cljs$core$IFn$_invoke$arity$1(G__51044) : fulcro.util.join_key.call(null,G__51044));
} else {
return expr;

}
}
});
fulcro.util.join_value = (function fulcro$util$join_value(join){
return cljs.core.second(fulcro.util.join_entry(join));
});
fulcro.util.mutation_join_QMARK_ = (function fulcro$util$mutation_join_QMARK_(expr){
return ((fulcro.util.join_QMARK_(expr)) && ((fulcro.util.join_key(expr) instanceof cljs.core.Symbol)));
});
fulcro.util.unique_ident_QMARK_ = (function fulcro$util$unique_ident_QMARK_(x){
return ((fulcro.util.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});
fulcro.util.recursion_QMARK_ = (function fulcro$util$recursion_QMARK_(x){
return ((cljs.core.symbol_identical_QMARK_(new cljs.core.Symbol(null,"...","...",-1926939749,null),x)) || (typeof x === 'number'));
});
fulcro.util.mutation_QMARK_ = (function fulcro$util$mutation_QMARK_(expr){
return ((fulcro.util.mutation_join_QMARK_(expr)) || (((function (){var G__51047 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__51047);
} else {
return G__51047;
}
})() instanceof cljs.core.Symbol)));
});
fulcro.util.mutation_key = (function fulcro$util$mutation_key(expr){
if((cljs.core.first(expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (first expr))"));
}

return cljs.core.first(expr);
});
/**
 * Get a unique string-based key. Never returns the same value.
 */
fulcro.util.unique_key = (function fulcro$util$unique_key(){
var s = cljs.core.random_uuid();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
});
fulcro.util.atom_QMARK_ = (function fulcro$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
fulcro.util.deep_merge = (function fulcro$util$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51171 = arguments.length;
var i__4731__auto___51172 = (0);
while(true){
if((i__4731__auto___51172 < len__4730__auto___51171)){
args__4736__auto__.push((arguments[i__4731__auto___51172]));

var G__51173 = (i__4731__auto___51172 + (1));
i__4731__auto___51172 = G__51173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.util.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.util.deep_merge.cljs$lang$applyTo = (function (seq51049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51049));
});

fulcro.util.conform_BANG_ = (function fulcro$util$conform_BANG_(spec,x){
var rt = cljs.spec.alpha.conform(spec,x);
if(cljs.spec.alpha.invalid_QMARK_(rt)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_str(spec,x),cljs.spec.alpha.explain_data(spec,x));
} else {
}

return rt;
});
/**
 * Logs the given message if v is false.
 */
fulcro.util.soft_invariant = (function fulcro$util$soft_invariant(v,msg){
if(cljs.core.truth_(v)){
return null;
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.util",new cljs.core.Keyword(null,"line","line",212345235),104], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invariant failed"], 0));
}catch (e51052){if((e51052 instanceof Error)){
var e__48920__auto__ = e51052;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.util",new cljs.core.Keyword(null,"line","line",212345235),104], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__48920__auto__], 0));
} else {
throw e51052;

}
}}
});
/**
 * DO NOT USE!
 * 
 *   This logic is held here because it was originally in
 *   fulcro.client.primitives, but we wanted to deprecate that, move it into
 *   fulcro.client.mutations, and reference the mutations implementation from
 *   primitives. However the mutations namespace already depends on the primitives
 *   namespace. So we put the logic here and reference it from both places.
 */
fulcro.util.__integrate_ident_impl__ = (function fulcro$util$__integrate_ident_impl__(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51177 = arguments.length;
var i__4731__auto___51178 = (0);
while(true){
if((i__4731__auto___51178 < len__4730__auto___51177)){
args__4736__auto__.push((arguments[i__4731__auto___51178]));

var G__51179 = (i__4731__auto___51178 + (1));
i__4731__auto___51178 = G__51179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.util.__integrate_ident_impl__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.util.__integrate_ident_impl__.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__51079){
var vec__51080 = p__51079;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__51080,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__51080,command,data_path,actions){
return (function (p1__51055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__51055_SHARP_,ident);
});})(vec__51080,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__51080,command,data_path,actions))
;
var G__51095 = command;
var G__51095__$1 = (((G__51095 instanceof cljs.core.Keyword))?G__51095.fqn:null);
switch (G__51095__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__51095,G__51095__$1,already_has_ident_at_path_QMARK_,vec__51080,command,data_path,actions){
return (function (p1__51056_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__51056_SHARP_);
});})(G__51095,G__51095__$1,already_has_ident_at_path_QMARK_,vec__51080,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = ((cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector))));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error(["Assert failed: ",["Replacement path must be a vector. You passed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join(''),"\n","(vector? data-path)"].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ","Path for replacement must be a vector","\n","(vector? vector)"].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error(["Assert failed: ","Path for replacement must end in a vector index","\n","(number? index)"].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error(["Assert failed: ",["Target vector for replacement does not have an item at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),"\n","(contains? vector index)"].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.util.__integrate_ident_impl__.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.util.__integrate_ident_impl__.cljs$lang$applyTo = (function (seq51057){
var G__51058 = cljs.core.first(seq51057);
var seq51057__$1 = cljs.core.next(seq51057);
var G__51059 = cljs.core.first(seq51057__$1);
var seq51057__$2 = cljs.core.next(seq51057__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51058,G__51059,seq51057__$2);
});


//# sourceMappingURL=fulcro.util.js.map
